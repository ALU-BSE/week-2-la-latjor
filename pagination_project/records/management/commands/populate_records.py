import random
from django.core.management.base import BaseCommand
from records.models import Record
from faker import Faker


class Command(BaseCommand):
    help = 'Populate the database with fake records'

    def handle(self, *args, **kwargs):
        fake = Faker()
        for _ in range(50):
            Record.objects.create(
                title=fake.sentence(),
                description=fake.paragraph(),
            )
        self.stdout.write(self.style.SUCCESS('Successfully added 50 records.'))
