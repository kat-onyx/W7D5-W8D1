class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password
    before_validation :ensure_session_token

    def self.generate_session_token 
        SecureRandom.urlsafe_base64(16)
    end
    
    def ensure_session_token
        self.session_token ||= self.generate_session_token
    end

    def reset_session_token 
        self.session_token = self.generate_session_token
        self.save
        self.session_token
    end

    def self.find_by_credentials(username, password) 
        user = User.find_by(username: username)

        if user && valid_password?(password) 
            return user
        else 
            return nil
        end
    end
end
