---
id: static-site
title: Static Site
---

KintoHub supports hosting of websites built with static site generator frameworks. Currently, only websites built in NodeJS language are supported.

![Static](/img/anatomy/static-service.png)

Very soon KintoHub will provide a feature to allow users to integrate and deploy continuously with CI/CD. If you are keen to see this feature in action, vote for it [here](https://feedback.kintohub.com/feature-requests/p/cicd).


![CI](/img/anatomy/integration.png)

## When to use a static site?

Static websites are a good choice when you want to couple them with content delivery networks (CDN) or have a website that does not require a port. 

If your website requires a port, checkout for Web Apps [here](../service-types/types-web-app.md#static-site)

:::note
Static site service is provided with **Build Output Path** field. The HTML files required by the site are fetched from the output path specified. 
:::

## Static site features

* Advance [Build](../anatomy/anatomy-build-settings.md) and [Deploy](../anatomy/anatomy-deploy.md) Settings
    * 1st Class Languages Build and Deploy support
    * Auto scaling
* [Metrics](../anatomy/anatomy-metrics.md)
* [Custom Domains](../anatomy/anatomy-domains.md)
* [Environment Variables](../anatomy/anatomy-environment-variables.md)