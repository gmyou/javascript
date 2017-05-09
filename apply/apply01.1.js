Function.prototype.construct = function(aArgs) {
  var fConstructor = this, fNewConstr = function() { fConstructor.apply(this, aArgs); };
  fNewConstr.prototype = fConstructor.prototype;
  return new fNewConstr();
};