class Project {
  constructor(name) {
    this.name = name;
    this.technicalDebt = 0;
    this.features = [];
    this.quality = 100;
  }

  addFeature(feature, rushJob = false) {
    this.features.push(feature);
    console.log(`Added feature: ${feature}`);

    if (rushJob) {
      this.incurTechnicalDebt();
    }
  }

  incurTechnicalDebt() {
    this.technicalDebt += 10;
    this.quality -= 5;
    console.log("Technical debt incurred. Quality decreased.");
  }

  payTechnicalDebt() {
    if (this.technicalDebt > 0) {
      this.technicalDebt -= 10;
      this.quality += 3;
      console.log("Paid some technical debt. Quality improved slightly.");
    } else {
      console.log("No technical debt to pay off.");
    }
  }

  status() {
    console.log(`
Project: ${this.name}
Features: ${this.features.join(", ")}
Technical Debt: ${this.technicalDebt}
Quality: ${this.quality}
    `);
  }
}

// Usage demonstration
const project = new Project("Act with Prudence Demo");

// Iteration 1: Adding features properly
project.addFeature("User Authentication");
project.addFeature("Data Validation");
project.status();

// Iteration 2: Rushed feature implementation
console.log("\nIteration 2: Deadline pressure");
project.addFeature("Quick Search", true);
project.addFeature("Basic Reporting", true);
project.status();

// Iteration 3: Paying technical debt
console.log("\nIteration 3: Paying technical debt");
project.payTechnicalDebt();
project.payTechnicalDebt();
project.addFeature("Advanced Search");
project.status();

// Iteration 4: Balancing new features and debt payment
console.log("\nIteration 4: Balancing act");
project.addFeature("Export Functionality");
project.payTechnicalDebt();
project.status();
