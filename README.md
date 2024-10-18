# Project Description

## Overview

This project consists of two separate applications, combined into a single Node.js server:

1. **Rule Engine with AST**
2. **Real-Time Data Processing System for Weather Monitoring with Rollups and Aggregates**

### Application 1: Rule Engine with AST

**Key Features:**

- Define a data structure to represent the AST (Abstract Syntax Tree).
- Store rules and metadata in a MongoDB database.
- API endpoints to create, combine, and evaluate rules against user data.
- Error handling for invalid rule strings or data formats.
- Validation for attributes to be part of a catalog.
- Modification of existing rules.

**Endpoints:**

- `POST /create_rule`: Creates a rule from a string representation and stores it as an AST.
- `POST /combine_rules`: Combines multiple rules into a single AST.
- `POST /evaluate_rule`: Evaluates a combined rule against provided user data.
- `GET /latest_ast`: Retrieves the latest AST from the database for evaluation.

**Example Rules:**

- Rule 1: `"((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)"`.
- Rule 2: `"((age > 30 AND department = 'Marketing')) AND (salary > 20000 OR experience > 5)"`.

### Application 2: Real-Time Data Processing System for Weather Monitoring

**Key Features:**

- Retrieve weather data from the OpenWeatherMap API at configurable intervals.
- Convert temperature values from Kelvin to Celsius.
- Store daily weather summaries in a MongoDB database.
- Define user-configurable thresholds for alerting.
- Implement visualizations to display daily summaries and alerts.

**Endpoints:**

- `GET /weather`: Fetches real-time weather data and processes it.
- `GET /summaries`: Retrieves daily weather summaries.
- `GET /alerts`: Retrieves active weather alerts.
- `POST /update_alert_preference`: Updates the user's alert preferences.

**Data Aggregation:**

- Daily weather summary includes average, maximum, and minimum temperatures, as well as dominant weather conditions.
- User-defined thresholds trigger notifications if conditions exceed limits.

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB (running on a server)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/kshubham767/assignment.git
   cd assignment
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Configuration

1. For MongoDB connection strings and API keys for OpenWeatherMap.

   - Add your MongoDB connection link in `config.js`, replacing the placeholder for `mongoURI`.
   - Add your weather API key in `config.js`, replacing the placeholder for `weatherApiKey`.

2. (Optional) Adjust the weather retrieval interval or alert thresholds in the configuration file if needed.

### Running the Application

Start the server:

```sh
node server.js
```

This will start both the Rule Engine and the Weather Monitoring application on a single server. The server will listen for API requests on the specified port (default: `3001`).

### API Endpoints

#### Rule Engine

- `POST /create_rule`: Create a rule and store it in the database.
- `POST /combine_rules`: Combine multiple rules into one.
- `POST /evaluate_rule`: Evaluate a rule against provided user data.
- `GET /latest_ast`: Get the latest stored AST.

#### Weather Monitoring

- `GET /weather`: Fetch and process current weather data.
- `GET /summaries`: Retrieve daily weather summaries.
- `GET /alerts`: Retrieve current weather alerts based on user-defined thresholds.
- `POST /update_alert_preference`: Update user-defined alert thresholds.

## Design Choices

- **Rule Engine:**

  - AST representation provides a flexible and scalable way to define complex rules and easily modify or combine them.
  - MongoDB is used to store the rules and metadata due to its schema-less nature, which makes it adaptable to dynamic rule structures.

- **Weather Monitoring:**
  - OpenWeatherMap API provides reliable and real-time weather data, which is essential for weather monitoring applications.
  - MongoDB stores aggregated data (rollups) for weather summaries, allowing for efficient data retrieval and alerting mechanisms.

## Dependencies

- Node.js
- MongoDB
- Axios (for HTTP requests to OpenWeatherMap API)
- Express (for building the API)
- Mongoose (for MongoDB interaction)

## Conclusion

This project demonstrates a combined application, including a Rule Engine using AST and a Real-Time Weather Monitoring System. It covers rule evaluation, data retrieval, processing, and storage, providing a flexible and scalable solution for both rule-based decision-making and weather monitoring.
