class Generation < ActiveHash::Base
  self.data = [
    { id: 1, name: '通信世代' },
    { id: 2, name: '4G' },
    { id: 3, name: '5G' }
  ]
end
