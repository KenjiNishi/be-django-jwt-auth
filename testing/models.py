from django.db import models

# Create your models here.

class Test(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    
    created_at = models.DateTimeField(auto_now_add=True)