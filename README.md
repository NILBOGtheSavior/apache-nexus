# Nexus Home

Nexus Home is a hardware and software project designed to centralize self-hosted services as an all-in-one solution. This includes:

- A clean frontend platform to interact with containerized services run on a Raspberry Pi
- A custom internal wiring system that manages power, storage, and processing, as well as peripheral connection.
- A 3D printed housing that contains all the components in a solid structure.

## The Software

### Frontend

The frontend was initially designed in plain HTML, CSS, and JS. The goal was to provide a clean interface for navigating the different services hosted on the platform, as well as display custom widgets such as weather, time, and bookmarks.

As the project evolved, the desire for more complex widgets and ease of customizability required a transition to the use of a framework to more easily develop new features and increase customizability of the platform.

### Containerization

To allow for the addition of several self-hosted services, Docker containers have been used. The original project included services such as:

- PiHole
- Home Assistant
- Immich
- Booklore
- Mainsail

### Network and Security

PiHole includes a personal DNS server that allows the use of a custom domain, `nexus.local`, to access the services within the network. This makes accessing the frontend from a variety of devices much simpler, forgoing the need to configure hosts for each device.

To allow access from outside the home network, WireGuard protocol was used in combination with UDP port forwarding. The decision to use WireGuard was mainly because of the secure nature of the connection, as well as the minimum overhead that the service uses.

## The Hardware

### Processing

The project runs on a Raspberry Pi 5 with Ubuntu 24.01 LTS as the OS.

### Power and Peripherals

The entire device is powered using a 50W 5A 10V dual-rail switching power supply. Power is distributed using a perfboard to connect to the Pi, powering it through GPIO pins. As overcurrent protection, a 5A polyfuse was used to negate the risk of frying the device.

Other peripherals include:

- An 8x32 NeoPixel matrix
- 2x stereo speakers
- Up to 2x 2.5" HDDs
- A 5V noctua fan for cooling

