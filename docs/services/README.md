---
sidebar: auto
---

# Services

## Auth Service

Auth Service is responsible for authenticate users and verify their authentication.

[GitHub](https://github.com/applicaset/auth-svc)

## User Service

User Service is responsible for storing users and logging them in.

[GitHub](https://github.com/applicaset/user-svc)

- Requires Auth Service
- Requires Auth Provider
  - [Anonymous Auth](https://github.com/applicaset/anonymous-auth)
  - [Google Auth](https://github.com/applicaset/google-auth)
  - [OTP Auth](https://github.com/applicaset/otp-auth)
    - Requires OTP Service
- Requires User Repository

## OTP Service

OTP Service is responsible for sending and verifying otp to phone numbers.

[GitHub](https://github.com/applicaset/otp-svc)

- Requires OTP Repository
  - [Redis Implementation](https://github.com/applicaset/otp-repo-redis)
- Requires SMS Service

## SMS Service

SMS Service is responsible for sending message to phone numbers.

[GitHub](https://github.com/applicaset/sms-svc)

- Requires SMS Sender
