from django.db.models.signals import pre_save
from django.contrib.auth.models import User

def updateUser(sender, instance, **kwargs):
    # this allows us to use the email as a username rather than having to change the Django User model itself
    user = instance
    if user.email != '':
        user.username = user.email

pre_save.connect(updateUser, sender=User)
