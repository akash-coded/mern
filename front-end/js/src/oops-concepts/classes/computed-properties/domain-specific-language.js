class QueryBuilder {
    constructor() {
        ['select', 'from', 'where', 'orderBy'].forEach(method => {
            this[method] = (arg) => {
                // We simply append the operation to the query
                this.query = (this.query || '') + ` ${method.toUpperCase()} ${arg}`;
                return this;
            }
        });
    }

    build() {
        return this.query;
    }
}

let query = new QueryBuilder()
    .select('*')
    .from('users')
    .where('age >= 18')
    .orderBy('age DESC')
    .build();

console.log(query);

// In this case, computed properties are used to dynamically create methods (select, from, where, orderBy) that modify the SQL query.