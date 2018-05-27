# @angeeks/chart

[![Build Status](https://travis-ci.org/angeeks/chart.svg?branch=master)](https://travis-ci.org/angeeks/chart)

Yet another chart.js wrapper for Angular

## Installation

```
  npm i -P @angeeks/chart
```

## Module setup

```
  # app.module.ts
  {{"
  import { ChartModule } from '@angeeks/chart';
  @NgModule({
    imports: [
      ...
      ChartModule.forRoot()
    ],
    ...
  }
  export class AppModule {}
  "}}
```

## Usage

```
  <ngk-chart type='bar' [data]='data'></ngk-chart>
```

[Demo](https://angeeks.github.io/chart/)
