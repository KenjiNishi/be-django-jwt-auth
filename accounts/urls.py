from django.urls import path, include
from .api import RegistrationAPI, LoginAPI, UserAPI
from knox import views as knox_views

from knox.views import LogoutView

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegistrationAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', LogoutView.as_view(), name='knox_logout')
    # path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout')
]