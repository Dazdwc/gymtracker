# api/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('saludo/', views.saludo_test, name='saludo_test'),
]
