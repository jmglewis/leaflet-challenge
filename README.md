# Visualizing USGS Earthquake Data with Leaflet

# Introduction
The United States Geological Survey (USGS) plays a crucial role in providing scientific data about natural hazards, ecosystem health, and climate change impacts. As part of their mission, they aim to develop tools for visualizing earthquake data to better educate the public and government organizations on global seismic activity.

## Instructions
The instructions for this activity are broken into two parts:

### Create the Earthquake Visualization

Your first task is to visualize an earthquake dataset. Complete the following steps:

1. Get your dataset. To do so, follow these steps:

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON FeedLinks to an external site. page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:
3-Data

When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:
4-JSON

2. Import and visualize the data by doing the following:

Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

Include popups that provide additional information about the earthquake when its associated marker is clicked.

Create a legend that will provide context for your map data.

Your visualization should look something like the preceding map.
