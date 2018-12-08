require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get api/" do
    get users_api/_url
    assert_response :success
  end

end
