# from django.shortcuts import render
from rest_framework import viewsets
from .serializer import UnidadSerializer
from .models import UnidadMedicion
# Create your views here.
class VistaUnidad(viewsets.ModelViewSet):
    serializer_class = UnidadSerializer
    queryset = UnidadMedicion.objects.all()
