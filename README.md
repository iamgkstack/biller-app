# biller-app
simple biller application

## Requirements

* NODE: `>= 10`
* YARN: `1.17.3`
* POSTGRES: `10.10`
* DATABASE: `biller_db`, `biller_db_test`

## Setup

```bash
# clone the project
git clone https://github.com/iamgkstack/biller-app.git && cd biller-app

# install the dependencies
yarn

# start the project
yarn serve

# test
yarn test
```

* This starts the server on the port 5200
* database seeds are located in `/src/sql/seeds`. These need to be run in the database

## APIs available for Local Host

HEALTH check API

```
curl --location --request GET 'https://biller-node-js.herokuapp.com/api/v1/healthz'
```

Fetch bill corresponding to the user

```curl
curl --location --request GET 'http://localhost:5200/api/v1/fetch/bill?mobile=9721867247' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpd3VmaDg4d2hyYjQzaGpici4wMzRmc2FkbGtmajUuNndlcHEiLCJqdGkiOiIzYTdlMzUyMC04YzBiLTExZWEtOTQxNi01OTg2ZjBkYWFjZmUiLCJpYXQiOjE1ODgzNzkwNDQsImV4cCI6MTU4ODM4MDg0NH0.VULrnpIRDIs4W3g8viAs13nIYya3ttjRqeOK3NuMBsw'
```

Fetch bill receipt against the billerBillID

```curl
curl --location --request PUT 'http://localhost:5200/api/v1/fetch/billReceipt' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpd3VmaDg4d2hyYjQzaGpici4wMzRmc2FkbGtmajUuNndlcHEiLCJqdGkiOiIzYTdlMzUyMC04YzBiLTExZWEtOTQxNi01OTg2ZjBkYWFjZmUiLCJpYXQiOjE1ODgzNzkwNDQsImV4cCI6MTU4ODM4MDg0NH0.VULrnpIRDIs4W3g8viAs13nIYya3ttjRqeOK3NuMBsw' \
--header 'Content-Type: application/json' \
--data-raw '{
    "billerBillID"   : "12123131322",
    "platformBillID" : "SETU121341312121",
    "paymentDetails" : {
        "platformTransactionRefID" : "TXN12121219",
        "uniquePaymentRefID"       : "XXXXAYYDDD999999",
        "amountPaid" : {
            "value" : 99000
        },
        "billAmount" : {
            "value" : 99000
        }
    }
}'
```


## APIs availbale Hosted on server

HEALTH check API
```
curl --location --request GET 'https://biller-node-js.herokuapp.com/api/v1/healthz'
```


Fetch bill corresponding to the user

```
curl --location --request GET 'https://biller-node-js.herokuapp.com/api/v1/fetch/bill?mobile=9721867247' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpd3VmaDg4d2hyYjQzaGpici4wMzRmc2FkbGtmajUuNndlcHEiLCJqdGkiOiIzYTdlMzUyMC04YzBiLTExZWEtOTQxNi01OTg2ZjBkYWFjZmUiLCJpYXQiOjE1ODgzNzkwNDQsImV4cCI6MTU4ODM4MDg0NH0.VULrnpIRDIs4W3g8viAs13nIYya3ttjRqeOK3NuMBsw'
```


Fetch bill receipt against the billerBillID

```
curl --location --request PUT 'https://biller-node-js.herokuapp.com/api/v1/fetch/billReceipt' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpd3VmaDg4d2hyYjQzaGpici4wMzRmc2FkbGtmajUuNndlcHEiLCJqdGkiOiIzYTdlMzUyMC04YzBiLTExZWEtOTQxNi01OTg2ZjBkYWFjZmUiLCJpYXQiOjE1ODgzNzkwNDQsImV4cCI6MTU4ODM4MDg0NH0.VULrnpIRDIs4W3g8viAs13nIYya3ttjRqeOK3NuMBsw' \
--header 'Content-Type: application/json' \
--data-raw '{
    "billerBillID"   : "12123131322",
    "platformBillID" : "SETU121341312121",
    "paymentDetails" : {
        "platformTransactionRefID" : "TXN12121219",
        "uniquePaymentRefID"       : "XXXXAYYDDD999999",
        "amountPaid" : {
            "value" : 99000
        },
        "billAmount" : {
            "value" : 99000
        }
    }
}'
```
