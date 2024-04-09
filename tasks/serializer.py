from rest_framework import serializers
from .models import UnidadMedicion

class UnidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnidadMedicion
        # la siguiente linea importa campos que se especifiquen
        # fields = ('id', 'title', 'description', 'done')
        # la siguiente linea importa todos los campos
        fields = '__all__'


