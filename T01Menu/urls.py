from django.urls import path
from .views import *

urlpatterns = [
    path('',homepage,name="homepage" ),
    path("menu/",Menu.as_view(),name="menu")
]
