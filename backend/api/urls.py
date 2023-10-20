from django.urls import path
from . import views

urlpatterns =[
    path('project/', views.apiProject, name="project"),
    path('employee/', views.apiEmployee, name="employee"),
    path('client/', views.apiUser, name="client"),
    path('cards/', views.apiCard, name="cards"),
    path('call/', views.apiCall, name="call"),
]