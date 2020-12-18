---
sidebar: auto
---

# Architecture

We believe in clean architecture.

So, every part of a project should be separated from the other parts.

## Service

The heart of the project are services;
But they just have business logic.
They should not depend on any technology or even technical concerns.
It doesn't matter which database you use, or how you serve client requests.

## Transport

This is the way your application talks to the world.
It could be rest api, graphql, grpc, and ...

Transport layer translates requests to or from the services.

It tells us how to talk with the application.

## Repository

Most services have an entity that they provide a business logic on it.
So they need to store instances of the entity in a database.
Repository layer is responsible for it.
The service has an interface for the repository, and we can implement it by using a database that is more convenient for it.

## Middleware

Every layer (Service, Transport, Repository) can be wrapped in middlewares for a purpose.
For example, we can use caching for a complex or high cost part to make it faster,
or add rate limit and throttling,
or log and monitor a part for technical goals.

## Driver

Some services need tools to do their business logic.
They provide an interface and need a driver that implements it.
For example, sms service needs a driver implementation for sending messages,
or user service has an interface for the login and accepts different implementations for it.

## Package

Packages are some libraries that are useful in different parts of the project.
For example: phone number sanitizer
