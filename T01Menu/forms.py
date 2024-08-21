from django import forms

class NameForm(forms.Form):
    first_name = forms.CharField(max_length="123",label="First Name",required=True)
    last_name = forms.CharField(max_length="123",label="Last Name",required=True)
    email = forms.EmailField(max_length="200",required=True)
    phone_number =  phone_number = forms.RegexField(regex=r'^\+?1?\d{9,15}$')
    def showInformation(self):
        print(self)
        