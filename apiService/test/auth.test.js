// require mocha
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Authentication API Service', function() {
    it('should POST a new user', function(done){
        const testUser = {
            username: 'admin12042020',
            password: 'newPassword',
            email: 'admin@admin.com',
        };
        const expectedUser = 
            {
                username: 'admin12042020',
                email: 'admin@admin.com',
            };

        chai
            .request('http://localhost:3000')
            .post('/api/auth/register')
            .send(testUser)
            .end(function(err,resp) {
                console.log(resp.body);
                expect(resp.body.username).to.eql(expectedUser.username);
                expect(resp.body.email).to.eql(expectedUser.email);
                done();
            });
    });


};