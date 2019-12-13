# Data Set Report Browser

## App functionality

1. Once a user clicks on the app, an inital query will be sent to the api that provide which dataSets and organisationUnits the user has view access to. A circular loader is shown in the app until this initial query is complete.
2. The data from the inital query will be sent to a filter component and a brief text explaining that the user has to select an organisation unit, a data set type and a duration is shown in the reports list. The filter component is a set of three dropdown buttons. If only one option is available, this will be selected and the dropdown button will be greyed out.
3. Once a user has selected all three options, a list of reports will be shown. The way this list is shown depends on which duration type the user has entered. Buttons for quick browsing of year or month will be shown where neccesary.
4. When a user clicks on one of the reports in the reports list, a query will be sent to the api to get the correct data set. Once the data set is loaded, it will show up on top of the app.
5. The report has an actionbar that gives the user options to share the report, or navigate to other reports??? Clicking outside the report (or X??), will let the user go back to the reports list to choose a new report to look at.

## Implementation

We use functional components in react for the whole app. All of the components used in the app are from the dhis2 core library and we've used the dhis2 runtime library to set up the app and get the data through the useDataQuery hook. A json file was created and is used to look up which duration options are available and how to format the periods in order to pass its as a parameter in the query.

## Missing functionality/implementations

- The dropdown buttons should have sub-menus with options for choosing modifiers for the different durations (Example. Financial Year July when hovering over Yearly), but these submenus is not showing up in the app. Functionality, if these modifiers are selected, are implemented though.
- Some very few endpoints that return error code 500 are failing silently. This could have been done better using the alert box functionality.
- We decided to use a normal fetch to query the dataSetReports API because we had some issues using the 'useDataQuery' hook. We tried our best to optimize the fetching as much as possible by only fetching when necessary, in a non-blocking function inside a useEffects hook.
- A "previous" and "next" option on the report Modal. We wanted this for easier navigation, but would have required more time.
- Sharing a report through DHIS2 messaging system. Had setup going, but not enough time to finish.
- A better way to search for the report. 52 weeks has to be scrolled through for reports etc.
