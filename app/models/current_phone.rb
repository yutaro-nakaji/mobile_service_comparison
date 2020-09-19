class CurrentPhone < ActiveHash::Base
  self.data = [
    { id: 1, name: '---' },
    { id: 2, name: 'docomo' },
    { id: 3, name: 'au' },
    { id: 4, name: 'softbank' },
    { id: 5, name: 'その他' }
  ]
end
