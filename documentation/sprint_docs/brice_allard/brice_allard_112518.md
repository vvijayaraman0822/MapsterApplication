### Name: Brice Allard
### Date: 11-25-2018

## Files Worked On

- https://github.com/briceallard/Mapster/blob/development/src/providers/auth/auth.ts
- https://github.com/briceallard/Mapster/blob/development/src/providers/userData/userData.ts
- https://github.com/briceallard/Mapster/blob/development/src/providers/utilities/utilities.ts
- https://github.com/briceallard/Mapster/blob/development/src/providers/location/location.ts
- https://github.com/briceallard/Mapster/tree/development/src/pages/modal-profile/
- https://github.com/briceallard/Mapster/tree/development/src/pages/profile/
- https://github.com/briceallard/Mapster/blob/development/src/providers/camera-service/camera-service.ts



## Approximate Time Worked

| Description                     | Hrs  |
| :------------------------------ | ---: |
| Location Providers              | 3.5  |
| Login and Profile Pages         | 2.5  |
| userData Provider               | 1.5  |
| camera-services Provider        | 1.5  |
| Total                           | 9.0  |

## Description of Sprint

Did some database management (added registration date and lastlogindate) as well as  
impliment the location services for database. The app now tracks location history of user  
and stores it in his user profile, as well as keeps the most recent location in a top  
level collection to display on the map.

Created a camera-services provider for taking photos at different qualities and setup  
firebase storage to hold the user profile images. These images are now sync'd across  
the app where your profile image will be displayed.
