from django.db import models

# Create your models here.

class UnidadMedicion(models.Model):
    simbolo = models.CharField(max_length=200)
    significado = models.TextField(blank=True)


    def __str__(self):
        return self.simbolo

