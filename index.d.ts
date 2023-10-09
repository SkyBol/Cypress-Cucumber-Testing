/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Returns current configuration
     *
     * @example
     * @todo Remove any
     *
     * cy.getConfig()
     */
    getConfig(): Chainable<any>;
    /**
     * Logs current user using Basic Auth
     *
     * @example
     *
     * cy.performBasicAuth()
     */
    performBasicAuth(account?, password?): Chainable<void>;
    /**
     * Goes to the environments page and creates a new Environment. The environment object must implement the IEnvironment interface.
     *
     * @example
     *
     * cy.createEnvironment(environmentData)
     */
    deleteEnvironment(environmentData): Chainable<void>;
    /**
     * Goes to the environments page and deletes a Environment. The environment object must implement the IEnvironment interface.
     *
     * @example
     *
     * cy.deleteEnvironment(environmentData)
     */
    createEnvironment(environmentData): Chainable<void>;
    /**
     * Goes to the apis page and creates a new API. The api object must implement the IApi interface.
     *
     * @example
     *
     * cy.createApi(apiData)
     */
    createApi(apiData): Chainable<void>;
    /**
     * Goes to the apis page and deletes a API. The api object must implement the IApi interface.
     *
     * @example
     *
     * cy.deleteApi(apiData)
     */
    deleteApi(apiData): Chainable<void>;
    /**
     * Goes to the packages page and creates a new package. The package object must implement the IPackage interface.
     *
     * @example
     *
     * cy.createPackage(packageData)
     */
    createPackage(packageData): Chainable<void>;
    /**
     * Goes to the packages page and deletes a package. The package object must implement the IPackage interface.
     *
     * @example
     *
     * cy.deletePackage(packageData)
     */
    deletePackage(packageData): Chainable<void>;
  }
}
