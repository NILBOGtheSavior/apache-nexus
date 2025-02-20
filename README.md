# apache-nexus

## To Do

- [x]   Implement loader
- [x]   Implement login
- [ ]   Implement injector -> Lemon8 development
- [ ]   Implement edit mode
- [ ]   Optimize images

## Widgets

Weather Widget: Use a weather API like OpenWeatherMap to display current weather conditions and forecasts.

To-Do List: Create a simple to-do list widget where you can add, edit, and delete tasks.

Calendar: Integrate a calendar widget to keep track of important dates and events.

News Feed: Display a feed of the latest news headlines using a news API like NewsAPI.

## Data Persistence?

### Why Use a Chrome Extension?
- Persistent storage (even after browser restarts).
- Background scripts to manage data processing.
- Access to additional Chrome APIs like file access, notifications, and alarms.

### Alternative: Progressive Web Apps (PWA)
If you're considering PWA, you can use:
- IndexedDB (for complex data storage)
- Cache API (to store assets for offline use)
- LocalStorage (simpler but limited to 5MB)