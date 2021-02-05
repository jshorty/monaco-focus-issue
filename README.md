# Monaco Focus Issue

Run `yarn` to install dependencies.

Run `yarn start` to run the repro.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Open the browser dev console to see logs. 
If you click into the editor directly, you will see logs for both editor widget and editor text focus.
However, if you open the popover by clicking the button, then click into the editor directly, only text focus will be logged.
