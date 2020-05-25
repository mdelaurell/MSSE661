// require mocha
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('travelers API Service', function() {
    it('should GET all travelers', function(done) {
        chai
            .request('http://localhost:3000')
            .get('/api/travelers')
            .end(function(err, resp){
                expect(resp.status).to.be.eql(200);
                expect(resp.body).to.be.a('array');
                expect(resp.body.length).to.not.be.eql(0);
                done();
            });
    });

    it('Should GET a single traveler', function(done){
        const expected = [
            {
                id: 1,
                name: "I'm the first traveler!",
                created_date: '2020-03-24T05:09:49.00Z',
                status: 'completed',
            },
        ];
        chai
            .request("http://localhost:3000")
            .get('/api/travelers/1')
            .end(function(err, resp){
                expect(resp.status).to.be.eql(200);


            });
    });

    it('should POST a single traveler', function(done){
        const newtraveler = {
            name: 'New test traveler!',
        };
        const expected = { message: 'Adde traveler successfully!'};

        chai
            .request('http://localhost:3000')
            .post('/api/travelers')
            .send(newtraveler)
            .end(function(err, resp){
                expect(resp.status).to.be.eql(200);
                expect(resp.body).to.be.eql(expected);
                done();
            });
    });
});