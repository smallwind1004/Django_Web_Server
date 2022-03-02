from django.urls import path
from main_blog import views

app_name = 'main_blog'
urlpatterns = [
    path('', views.main_blog, name='main_blog'),
    path('about/', views.about, name='about'),
]

