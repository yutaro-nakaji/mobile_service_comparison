class Number < ActiveHash::Base
  self.data = [
    { id: 1, name: '0台' },
    { id: 2, name: '1台' },
    { id: 3, name: '2台' },
    { id: 4, name: '3台以上' }
  ]
end
