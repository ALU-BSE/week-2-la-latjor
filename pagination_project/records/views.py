from django.core.paginator import Paginator
from django.shortcuts import render
from .models import Record


def record_list(request):
    record_list = Record.objects.all().order_by('-created_at')
    paginator = Paginator(record_list, 10)  # Show 10 records per page
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, 'records/record_list.html', {'page_obj': page_obj})
