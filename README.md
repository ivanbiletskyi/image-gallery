## Image Gallery

Demo on Heroku: <https://new-age-image-gallery.herokuapp.com/>
(synced with GitHub, so this is the latest 'master' commit version)

#### If you want to run it localy:

```bash
yarn installAll
```

to install all client and server dependencies

```bash
yarn dev
```

to start node server and create-react-app development server

## Task

Create a React component which shows an image gallery. Images should be shown as thumbnails with title, date of adding and rate.
Images should be loaded by ajax query from server (node app with one route which return a list of images from JSON file with structure: [{ id, url, title, description, date, rate }, ..., {...}] ).
Click on an image should open a modal with a full image, text description and Rate element (dropdown with values 1-5 and a button "Rate"). Modal component should be implemented as HOC.
Click on the Rate button should start Redux cycle which creates an ajax query and update a rate value in the related image object in JSON.
After successfull updating the image rate in the gallery view should be updated too.
