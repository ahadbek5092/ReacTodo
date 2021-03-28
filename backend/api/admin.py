from django.contrib import admin
from .models import Persons

@admin.register(Persons)
class PersonsAdmin(admin.ModelAdmin):
    list_display = ['name', 'lastname', 'age']
    list_filter = ['name', 'age']
