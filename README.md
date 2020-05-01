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

## APIs available

Fetch bill corresponding to the user

```curl
curl -X GET http://localhost:5200/api/v1/fetch/bill?mobile=972186724
```

Fetch bill receipt against the billerBillID

```
curl --location --request PUT 'http://localhost:5200/api/v1/fetch/billReceipt' \
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

