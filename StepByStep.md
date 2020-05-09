## install serverless 
  - npm i serverless -g

## to run serverless local 
  - npm install serverless-offline --save-dev
  - npm i serverless-dynamodb-local@0.2.24 --save-dev
  - sls dynamodb install
  https://stackoverflow.com/questions/51925672/sls-dynamodb-start-throws-spawn-java-enoent
  NOTE: update java to java 11  ```sudo apt install openjdk-11-jre-headless```
### to run it serverless offline
Add them to plugins and

            custom: 
              serverless-offline:
                port: 3003
            
              dynamodb:
                start:
                  port: 8000
                  inMemory: true
                  migrate: true
                stages: # Add this section of the config
                  - dev

### TO start local 
  - sls dynamodb start
  - sls offline start