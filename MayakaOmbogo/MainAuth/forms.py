from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser

class SignUpForm(UserCreationForm):
    email = forms.EmailField(max_length=254, help_text='Required. Enter a valid email address.')
    username = forms.CharField(max_length=150, help_text='Optional. Choose a username.')
    phone_number = forms.CharField(max_length=15, required=False, help_text='Optional.')
    profile_picture = forms.ImageField(required=False, help_text='Optional.')

    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'phone_number', 'profile_picture', 'password1', 'password2')