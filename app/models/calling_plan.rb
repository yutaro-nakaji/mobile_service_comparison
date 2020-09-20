class CallingPlan < ActiveHash::Base
  self.data = [
    { id: 1, name: '---' },
    { id: 2, name: '従量制（かけ放題等の契約なし）' },
    { id: 3, name: '5分通話無料オプション' },
    { id: 4, name: 'かけ放題' }
  ]
end
