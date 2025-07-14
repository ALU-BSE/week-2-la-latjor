from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('records.urls')),
]

# Serve static files during development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    # Also serve files from STATICFILES_DIRS
    from django.contrib.staticfiles.views import serve
    from django.urls import re_path
    urlpatterns += [
        re_path(r'^static/(?P<path>.*)$', serve),
    ]
