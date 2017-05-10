# wethepeople

An app made for a group React/React Native project. I worked mostly on styling, on the API calls to the Google Civic API and structuring the Rep List page and Maps page (which ended up not being included in final product).

![home screen](http://i.imgur.com/PGJpdwA.png "Home Screen")
![reps page](http://i.imgur.com/9Oj2ljx.png "Reps Page")
![change location](http://i.imgur.com/IUCmUCk.png "Change Location")

--

This app is used to help simplify the process of finding elected officials for the public.
It uses google maps geolocation to find local representatives for county and city but
also lists state and federal represenatives.
The tabs for each list (federal, state and local) will list the representative
with name, title, party, phone and email icons linked to the individuals contacts.

Clicking on the name drops down for more information including a photo,
if they have one in the api, as well as their official web page and social media
like facebook and twitter.

The homepage displays current location but there is a change location option to find
representatives in a different location.

All components were separated into their own files then imported/exported appropriately
to pass the information.

Being a mobile app react-native was used, it is currently only for apple iOS, but
could be done for android in the future.

The fonts and colors were researched for a more inviting design so that it is
easy to look at, read and find what the user is looking for without harsh contrasts.

colors used: #512DA8, #D1C4E9, #FFFFFF, #141414, #549E95
fonts: Zapfino,
