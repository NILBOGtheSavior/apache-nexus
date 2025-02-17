function getFavicon(url) {
    const faviconUrl = new URL(url);
    faviconUrl.pathname = '/favicon.ico'; // Favicon is usually at /favicon.ico
    
    // Attempt to fetch favicon.ico directly from the site
    fetch(faviconUrl)
      .then(response => {
        if (response.ok) {
          console.log("Favicon found:", faviconUrl.href);
          return faviconUrl.href; // return favicon URL
        } else {
          console.log("No favicon found, trying link element...");
          return getFaviconFromLink(url); // Fallback to link element method
        }
      })
      .catch(() => {
        console.log("No favicon found.");
      });
  }
  
  function getFaviconFromLink(url) {
    fetch(url)
      .then(res => res.text())
      .then(html => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        const faviconLink = doc.querySelector("link[rel*='icon']");
        if (faviconLink) {
          const favicon = faviconLink.href;
          console.log("Favicon from link tag:", favicon);
          return favicon;
        } else {
          console.log("No favicon in the link tag.");
        }
      })
      .catch(error => console.log("Error fetching HTML:", error));
  }
  
  // Example usage:
  getFavicon("https://example.com");