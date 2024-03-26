---
title: Edit & Customize
icon: pen-to-square
---

# Edit & Customize

You can edit your hubs at any time. To do this, use the `/hub manage` command. This will open a menu where you can change your hub's settings. You can change your hub's name, icon, banner, description and more. You can also change your hub's visibility.

**Example:** In this example, we'll change the visibility of our hub from public to private:

![Hub Manage](../.gitbook/assets/HubManage.gif)

#### Hub Settings

We have a separate panel for toggling your hub's global settings. It can be viewed in `/hub manage`

![Hub Settings](../.gitbook/assets/HubSettings.gif)

#### Receiving Logs

Once your hub grows, having logs becomes crucial for moderating. To enable logs for specific events use the "Logging" button in `/hub manage`.

We currently support the following logs:

| Log Type                | Description                                               |
| ----------------------- | --------------------------------------------------------- |
| `reports` (recommended) | Receive reports from directly from the users in your hub. |
| `modLogs` (recommended) | Moderation actions performed by moderators.               |
| `profanity`             | Log messages that are caught by the profanity filter.     |
| `joinLeave`             | Log when a server joins or leaves this hub.               |
