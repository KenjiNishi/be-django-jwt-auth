# Equivalent to controllers in MVC frameworks.

from django.shortcuts import render

from .models import Test
from .serializers import TestSerializer
from rest_framework import generics

class TestListCreate(generics.ListCreateAPIView):
    #  handling GET and POST requests
    queryset = Test.objects.all()
    serializer_class = TestSerializer


