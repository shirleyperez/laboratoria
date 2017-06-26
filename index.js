function multiplicar ( num , arr )
{
var number = array . reduce ( function ( total , actual )
{
  return total * actual
} );
  return number * arr ;
}

 describe ("multiplicar",function()
{
   it("prueba de [2,3] Y 10",function()
{
   assert.equal(60,multiplicar([2,3] ,10 ));
});
   it("prueba de [2,3] Y nada",function()
{
   assert.equal(60,multiplicar([2,3] ));
});
});
