cd NodeJS/
rm -rf ./test-report.xml && CI=true ./node_modules/.bin/jest --testResultsProcessor ./node_modules/jest-junit-reporter;
cd ../ReactJS/
rm -rf ./test-report.xml && CI=true ./node_modules/.bin/react-scripts test --verbose --env=jsdom --testResultsProcessor ./node_modules/jest-junit-reporter;
