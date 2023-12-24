from django.db import models
from backend import settings

# Create your models here.

class CustomDateTimeField(models.DateTimeField):
    def value_to_string(self, obj):
        val = self.value_from_object(obj)
        if val:
            val.replace(microsecond=0)
            return val.isoformat()
        return ''

class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    date = CustomDateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[:50] + "..."
