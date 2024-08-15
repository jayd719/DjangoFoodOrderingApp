from django.urls import path
from .views import *

urlpatterns = [
    path('',homepage,name="homepage" ),
    path('<int:item_number>/this',itemDetails,name="item_details")
]
