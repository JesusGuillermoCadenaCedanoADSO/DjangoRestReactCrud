from rest_framework import serializers
from .models import UnidadMedicion

class UnidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnidadMedicion
        fields = '__all__'


