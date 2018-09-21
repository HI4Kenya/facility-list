#  *__...AFYA360 DOCUMENTATION.__*
==============================

## *Group Members:*
---
### Peter Kiarie
### Grace Mbira
### Peter Njoki
### Gifton Omwenga

## Task 
---
### Integrating MFL in DHIS2

## *---Task List---*
---


### Peter njoki
---
 -[ ] Back-end.

 -[ ] Fetching data from DHIS2 and KMFL, comparison and conflict resolution 

 #### Test the Search engine for ability to query the API and whether we will download all the data first
http://api.kmhfltest.health.go.ke/api/facilities/services/?format=json&page_size=92 lists all the services available in kmhfl.

    1. How do we avoid downloading all the data into the local machine---------------------http://api.kmhfltest.health.go.ke/api/facilities/facilities/?search=ken&format=json
	2. How do we query the whole API as opposed to just one page----------http://api.kmhfltest.health.go.ke/api/facilities/services/?format=json&page_size=92
	3.  How do deal with static data e.g. counties when searching. Do we store all the data about counties offline to automatically detect when typed or do we keep querying /api/commons/counties?format=json------------------WHEN FETCHED FIRST TIME, 			PREVENT FETCHING WHEN RELOADING 
	4. How to automatically detect the user is typing a KMHFL code.----------------DONE var n = str.search("[0-9]");
	5. Autosuggest- Do we keep calling the API every time the user types even a small string or download the most common searches offline..................DONE keep hitting http://api.kmhfltest.health.go.ke/api/facilities/facilities/?search=ken&format=json Also how exactly autosuggest works in JS ------------------DONE autosugest file has all the answers
	6. How the various filters translate into API endpoints

/api/facilities/facilities/?county=fa47afa2-a78a-421f-ad9f-55e6cbfc280c

	7.  How the various GEO codes translate into a map----------------------DONE
	http://api.kmhfltest.health.go.ke/api/facilities/facilities/?fields=lat_long&format=json&page_size=11133
	create markers and add the points from the API end point and add them to the google maps

	8.  do you filter data already in the search results or all the data in the system.-------------------DONE Prefer to have an option to switch between the two options

 
 -[ ] Part of Front-end

### Grace Mbira
---S
 -[ ] Visualisation


     -[ ] Search fuctionality 
     -[ ] report generation

 -[ ] Create the UI with dummy data.

### Peter Kiarie
---
 -[ ] Front-end

      -[ ] upadating

 -[ ] integrate and test

	-[ ] Finalize the UI and integrate the features in D one at a time

	-[ ] Test
### GIfton Omwenga
---
 -[ ] Documentation
    
    -[ ] prototype
    