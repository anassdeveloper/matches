class APIFeatures{
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }

    filter(){
       const queryObj = {...this.queryString};
       const excludedFields = ['page', 'sort', 'limit', 'fields'];
       excludedFields.forEach(el => delete queryObj[el]);
       this.query = this.query.find(queryObj);
       return this;
    }

    sort(){
        
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        }else{
            this.query = this.query.sort('-createdAt');
        }
        return this;
    }
    limitFields(){
        if(this.queryString.fields){
            const forbidden = ['status', '__v'];
            console.log(this.queryString.fields);
            const fields = this.queryString.fields
            .split(',').filter(f => !forbidden.includes(f)).join(' ');
            this.query = this.query.select(fields);
        }else{
            this.query = this.query.select('-__v')
        }
        return this;
    }

    paginate() {
    const page = Math.max(1, this.queryString.page * 1 || 1);
    const limit = Math.min(this.queryString.limit * 1 || 100, 1000);
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIFeatures;