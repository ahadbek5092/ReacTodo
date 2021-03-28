from django.shortcuts import render
from rest_framework import viewsets
from .models import Persons
from .serializers import PersonsSerializer

# Create your views here.
class PersonViewSet(viewsets.ModelViewSet):
    queryset = Persons.objects.all()
    serializer_class = PersonsSerializer
    
